import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const folder = 'src/assets';
const files = await readdir(folder);
const targets = files.filter(f => f.endsWith('.png') && ['tripguide.png','herobg.png','jobit.png','carrent.png'].includes(f));

for (const file of targets) {
  const input = join(folder, file);
  const output = join(folder, file.replace('.png', '.webp'));
  await sharp(input).webp({ quality: 82 }).toFile(output);
  const before = (await stat(input)).size / 1024;
  const after = (await stat(output)).size / 1024;
  console.log(`${file}: ${before.toFixed(0)} KB → ${after.toFixed(0)} KB (${((1-after/before)*100).toFixed(0)}% smaller)`);
}