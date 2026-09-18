import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { message, student } = req.body || {};
    if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Message is required.' });
    const safe = student && typeof student === 'object' ? {
      name: String(student.name || 'Student').slice(0, 80),
      college: String(student.college || '').slice(0, 120),
      goal: String(student.goal || '').slice(0, 200)
    } : {name:'Student',college:'',goal:''};
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
      instructions: `You are JARVIS, a concise and friendly student assistant. Help with studying, planning, coding, productivity, college organization and general questions. Be practical and clear. Do not claim to perform actions you cannot perform. Student context: name=${safe.name}; college=${safe.college}; goal=${safe.goal}.`,
      input: message
    });
    return res.status(200).json({ reply: response.output_text || "I couldn't generate a response." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'JARVIS server error. Check OPENAI_API_KEY, OPENAI_MODEL, and deployment settings.' });
  }
}

