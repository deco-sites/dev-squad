# Generate db (windows)
```bash
# Replace this command in `deno.json`
"db:generate": "deno run -A --node-modules-dir npm:drizzle-kit@0.21.2 generate < NUL"

# Add migration
deno task db:setup:deps

# Apply migration
deno task db:schema:update
```

# Start — deco.cx template 

Welcome to your [deco.cx](https://deco.cx) site!

## Usage

1 - [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation/)


2 - Run the command

```sh
deno task start
```

This will install all dependencies and start your project.

Access `http://localhost:8000` to see your site.

## Recommended extensions (VSCode)

- [Deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Dependencies

Keep your dependencies updated by running:

```sh
deno task update
```

## Help

- 📚 [Docs](https://www.deco.cx/docs/en/overview)

- 🚨 [Troubleshooting](https://deco.cx/docs/en/reference/troubleshooting)

- 🔤 [Glossary](https://deco.cx/glossary)

- 👥 [Discord](https://deco.cx/discord)

## Contributing

We are working on the instructions, for now feel free to contribute to this project.

Take a look on this ones:
- [deco](https://github.com/deco-cx/deco/)
- [apps](https://github.com/deco-cx/apps/)
