// One Letter for Your Day (u-puan-one-letter-for-your-day-e54e9c36).
//
// The whole entry is one letter, written to /output/entry.txt. Picking it
// is the whole game: the judge reads the letter and hears the word behind
// it, so the letter has to carry a day in a single stroke.
//
// The pick is K.
//
// K stands for "knackered" — the day is over and so am I: bone-tired,
// wiped out, running on fumes, slumped in the chair still wearing the
// day. Why this letter, against the judge's brief:
//   - vivid: "knackered" is a picture, not a mood — the slump, the heavy
//     limbs, the empty tank.
//   - funny: blunt slang that lands at once, the kind of word you repeat
//     to a friend while laughing at yourself.
//   - true: an honest report of a real day that took everything, not a
//     performance of a good one.
//   - the fit: K is the word's own initial, and the hard K sound is the
//     word's punch. It is not the obvious pick (T for tired); it is the
//     sharper one.
//
// The program does nothing else: one letter, one file, one byte.

import { mkdirSync, writeFileSync } from 'node:fs';

function chooseLetter(): string {
  return 'K';
}

function main(): void {
  const letter = chooseLetter();
  if (!/^[A-Z]$/.test(letter)) throw new Error(`not one letter A-Z: ${letter}`);
  mkdirSync('/output', { recursive: true });
  writeFileSync('/output/entry.txt', letter, 'utf8');
}

main();
