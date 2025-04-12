# Biome .gitignore slash bug repro

## Instruction

1. `pnpm i`
2. `node --run prepare`
3. `git status` (should be clean)
4. `node --run check` (should be clean, but actually not)