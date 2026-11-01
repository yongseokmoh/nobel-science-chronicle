const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/nobelFullData.json'));

// 물리학 세부 분과학문 정의
function classifyPhysics(p) {
  const m = (p.titleEn + ' ' + (p.categoryCluster || '')).toLowerCase();
  if (m.match(/astro|cosmo|black hole|universe|gravitat|pulsar|cmb|expanding|galaxy|relativity|planet|neutrino.*cosm|star/)) {
    return { subFieldId: 'phys-astro', subFieldKo: '우주론·천체물리학 & 중력', desc: '일반상대성이론, 블랙홀, 우주배경복사, 중력파 및 외계행성' };
  }
  if (m.match(/quantum|mechanics|wave|schrödinger|heisenberg|dirac|bohr|uncertainty|photoelectric|planck|entangle|bell/)) {
    return { subFieldId: 'phys-quantum', subFieldKo: '양자역학 & 양자정보', desc: '파동역학, 불확정성 원리, 양자 얽힘 및 양자 전산' };
  }
  if (m.match(/particle|quark|neutrino|boson|higgs|symmetry|meson|nucleon|qed|electroweak|gauge|cern|accelerator/)) {
    return { subFieldId: 'phys-particle', subFieldKo: '입자물리학 & 표준모형', desc: '기본 입자(쿼크·렙톤·보손), 통일장이론 및 고에너지 가속기' };
  }
  if (m.match(/nuclear|neutron|fission|fusion|radioactiv|isotope|decay|nucleus|cyclotron/)) {
    return { subFieldId: 'phys-nuclear', subFieldKo: '핵물리학 & 방사선', desc: '원자핵 구조, 중성자, 핵분열 및 방사성 붕괴' };
  }
  if (m.match(/semiconductor|transistor|superconduct|graphene|condensed|crystal|bose|fermi|liquid helium|magnetic|junction/)) {
    return { subFieldId: 'phys-condensed', subFieldKo: '응집물질 & 반도체 물성', desc: '고체물리, 초전도체, 반도체 트랜지스터 및 2차원 나노소재' };
  }
  if (m.match(/laser|optic|light|spectroscopy|maser|microscop|x-ray|diffraction|imaging|interferom/)) {
    return { subFieldId: 'phys-optics', subFieldKo: '광학 & 정밀측정 기술', desc: '레이저 분광학, X선 회절, 광섬유 및 고정밀 계측' };
  }
  return { subFieldId: 'phys-complex', subFieldKo: '통계물리 & 복잡계/AI', desc: '상전이, 볼츠만 분포, 기후 복잡계 및 인공신경망 물리' };
}

// 화학 세부 분과학문 정의
function classifyChemistry(p) {
  const m = (p.titleEn + ' ' + (p.categoryCluster || '')).toLowerCase();
  if (m.match(/dna|rna|protein|enzyme|ribosome|genetic|biochemi|crispr|folding|metabol|nucleic|sequenc/)) {
    return { subFieldId: 'chem-biochem', subFieldKo: '생화학 & 분자구조 생물학', desc: 'DNA/단백질 구조 결정, 유전암호, 효소 기전 및 크리스퍼' };
  }
  if (m.match(/polymer|macromolecule|cataly|organic|synthesis|carbon|asymmetric|metathesis|click|grignard/)) {
    return { subFieldId: 'chem-organic', subFieldKo: '유기화학 & 정밀합성·촉매', desc: '유기화합물 전합성, 비대칭 촉매 반응, 고분자 플라스틱' };
  }
  if (m.match(/thermodynamic|dynamic|kinetic|surface|electrochem|battery|lithium|spectro|femtochem|quantum chem/)) {
    return { subFieldId: 'chem-physical', subFieldKo: '물리화학 & 전기화학/배터리', desc: '반응동역학, 삼투압, 분자궤도함수 계산 및 리튬 2차전지' };
  }
  if (m.match(/radioactiv|radium|polonium|uranium|isotope|fission|inorganic|boron|complex|coordination|organometal/)) {
    return { subFieldId: 'chem-inorganic', subFieldKo: '무기화학 & 방사화학', desc: '착물 화학, 방사성 동위원소, 유기금속 및 결정 격자' };
  }
  if (m.match(/atmosphere|ozone|green|environment|climate|cfc|cycle/)) {
    return { subFieldId: 'chem-env', subFieldKo: '환경·대기화학 & 지속가능 화학', desc: '성층권 오존층 보존, 환경 모니터링 및 녹색 화학' };
  }
  return { subFieldId: 'chem-analytical', subFieldKo: '분석화학 & 기기측정 도구', desc: '질량분석법, NMR, 크로마토그래피 및 극저온 전자현미경' };
}

// 생리의학 세부 분과학문 정의
function classifyMedicine(p) {
  const m = (p.titleEn + ' ' + (p.categoryCluster || '')).toLowerCase();
  if (m.match(/dna|rna|gene|genetic|mrna|chromosome|heredity|mutation|transcription|epigenetic|microrna/)) {
    return { subFieldId: 'med-genetics', subFieldKo: '유전학 & 분자유전체학', desc: 'DNA 복제, 유전자 발현 조절, mRNA 기술 및 마이크로RNA' };
  }
  if (m.match(/immune|antibod|serum|vaccin|cancer|t cell|checkpoint|interferon|lymph|phagocyt|immunol/)) {
    return { subFieldId: 'med-immunology', subFieldKo: '면역학 & 면역항암치료', desc: '선천/후천 면역, 항체 혈청 요법, 백신 및 면역관문억제제' };
  }
  if (m.match(/penicillin|antibiotic|bacteri|virus|parasit|malaria|tuberculosis|infection|streptomycin|hiv|hepatitis/)) {
    return { subFieldId: 'med-infectious', subFieldKo: '감염병 & 항생물질·미생물학', desc: '세균·바이러스 병인학, 페니실린 등 항생물질 및 백신' };
  }
  if (m.match(/neuron|brain|nerve|synapse|sensory|odor|vision|cortex|neural|hearing|memory|reflex/)) {
    return { subFieldId: 'med-neuro', subFieldKo: '신경과학 & 뇌인지 생리학', desc: '시냅스 신호전달, 뇌 지도, 후각 수용체 및 감각 생리' };
  }
  if (m.match(/cell|cycle|organ|transplant|stem cell|differen|embryo|channel|g-protein|signaling|membrane/)) {
    return { subFieldId: 'med-cellbio', subFieldKo: '세포생물학 & 줄기세포·발생학', desc: '세포 주기, 막 단백질/이온 통로, 유도만능줄기세포(iPSC)' };
  }
  return { subFieldId: 'med-physiology', subFieldKo: '임상 생리학 & 의료 진단기술', desc: '심전도, 혈압 조절, 비타민 대사, CT/MRI 영상 진단' };
}

// 경제학 세부 분과학문 정의
function classifyEconomics(p) {
  const m = (p.titleEn + ' ' + (p.categoryCluster || '')).toLowerCase();
  if (m.match(/macro|monetary|fiscal|business cycle|growth|inflation|consumption|unemployment|phillips/)) {
    return { subFieldId: 'econ-macro', subFieldKo: '거시경제학 & 통화·성장이론', desc: '경제성장 모형, 인플레이션-실업, 통화정책 및 경기변동' };
  }
  if (m.match(/micro|general equilibrium|welfare|consumer|social choice|market|mechanism design|incentive/)) {
    return { subFieldId: 'econ-micro', subFieldKo: '미시경제학 & 일반균형·후생이론', desc: '소비자 효용, 일반균형 체계, 사회적 선택 및 메커니즘 디자인' };
  }
  if (m.match(/game|equilibrium|nash|strategic|cooperative|auction|bargaining|rational/)) {
    return { subFieldId: 'econ-game', subFieldKo: '게임이론 & 전략적 상호작용', desc: '내시 균형, 불완전정보 게임, 경매 설계 및 행동 전략' };
  }
  if (m.match(/econometric|time series|empiric|causal|randomized|rct|natural experiment|estimation/)) {
    return { subFieldId: 'econ-econometrics', subFieldKo: '계량경제학 & 실증인과분석', desc: '시계열 계량분석, 자연실험, RCT 무작위 대조군 평가' };
  }
  if (m.match(/finance|asset|portfolio|option|pricing|black-scholes|capital market/)) {
    return { subFieldId: 'econ-finance', subFieldKo: '금융경제학 & 자산가격결정론', desc: '포트폴리오 선택, 자산가격 실증분석 및 파생상품 옵션공식' };
  }
  return { subFieldId: 'econ-institutional', subFieldKo: '제도경제학 & 국가번영·노동', desc: '재산권과 포용적 제도, 국가 간 빈부격차, 계약이론' };
}

// 전체 데이터에 subField 매핑 적용
const updatedData = data.map(p => {
  let sub;
  if (p.domain === 'physics') sub = classifyPhysics(p);
  else if (p.domain === 'chemistry') sub = classifyChemistry(p);
  else if (p.domain === 'medicine') sub = classifyMedicine(p);
  else sub = classifyEconomics(p);

  return {
    ...p,
    subFieldId: sub.subFieldId,
    subFieldKo: sub.subFieldKo,
    subFieldDesc: sub.desc
  };
});

fs.writeFileSync('src/data/nobelFullData.json', JSON.stringify(updatedData, null, 2));
console.log('Successfully enriched nobelFullData.json with subfields!');

// 분포 확인
const stats = {};
updatedData.forEach(p => {
  const key = `${p.domain} -> ${p.subFieldKo}`;
  stats[key] = (stats[key] || 0) + 1;
});
console.log('Subfield counts:', stats);
