# Student JARVIS V3

V3 upgrades the Student JARVIS dashboard with a real OpenAI-powered AI assistant through a server-side Vercel Function.

## Important
Do NOT put your OpenAI API key in `public/app.js`, `index.html`, or any `NEXT_PUBLIC_*` variable. The key belongs in Vercel Environment Variables.

## Deploy on Vercel
1. Create a new GitHub repository, e.g. `student-jarvis-v3`.
2. Upload everything in this ZIP, preserving the folders (`public/` and `api/`).
3. Import the GitHub repo into Vercel.
4. Deploy with the project root as `/` and no framework required.
5. Open Vercel Project → Settings → Environment Variables.
6. Add `OPENAI_API_KEY` with your OpenAI API key.
7. Add `OPENAI_MODEL` with `gpt-5.6-luna` (or another model available to your API account).
8. Redeploy.
9. Open the Vercel URL and test the AI Assistant tab.

The existing GitHub Pages site can remain as V2. This V3 package uses `/api/chat`, so the complete project should be deployed on Vercel for the AI route to work.

## Local data
Tasks, notes, profile, expenses and CGPA are stored in the browser's localStorage. Export Backup creates a JSON backup.
