import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function prepareDirectory(name) {
	await mkdir(name, { recursive: true });

	await writeFile(
		join(name, "test.json"),
		'{    \n    "foo"\n  \n    \n        :\n    "bar"\n \n           \n    }\n',
	);
}

await prepareDirectory("ok");
await prepareDirectory("offending");
