<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deployment-rules -->
# Deployment workflow

The production site is deployed on Railway from the GitHub repository `Dan4eck/your-energy`, branch `main`.

- Do not deploy production changes with `railway up` during normal site updates.
- Make site changes locally, run `npm run build`, commit them to Git, and push to `origin/main`.
- Railway is connected to the GitHub repo and should automatically build and deploy each pushed commit from `main`.
- Use Railway CLI only for status/log inspection or exceptional manual recovery.
<!-- END:deployment-rules -->
