const fs = require('fs');

const fullPrizes = JSON.parse(fs.readFileSync('src/data/nobelFullData.json'));
const origCode = fs.readFileSync('src/data/nobelData.ts', 'utf-8');

// 원본에서 정밀 수기 작성된 16개 마일스톤 데이터 추출 (abstract, impact, laureateProfile 보존)
const detailed16Map = {};
const prizeRegex = /{\s*id:\s*['"]([^'"]+)['"][\s\S]*?keywords:\s*\[[\s\S]*?\]\s*}/g;
let match;
while ((match = prizeRegex.exec(origCode)) !== null) {
  const block = match[0];
  const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    try {
      // safe eval as object
      const obj = eval('(' + block + ')');
      detailed16Map[obj.id] = obj;
    } catch(e) {}
  }
}

console.log('Detailed curated milestones count:', Object.keys(detailed16Map).length);

// Merge: 만약 16개 고정밀 마일스톤에 해당하면 고정밀 버전 사용, 아니면 전수 데이터 사용
const mergedPrizes = fullPrizes.map(p => {
  // check if id in detailed16Map
  const detailed = detailed16Map[p.id];
  if (detailed) {
    return detailed;
  }
  return p;
});

console.log('Total merged prizes:', mergedPrizes.length);

// Write back to nobelFullData.json
fs.writeFileSync('src/data/nobelFullData.json', JSON.stringify(mergedPrizes, null, 2));
console.log('Successfully updated nobelFullData.json with rich milestones');
