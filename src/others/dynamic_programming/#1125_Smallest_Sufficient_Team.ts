function smallestSufficientTeam(
  req_skills: string[],
  people: string[][]
): number[] {
  /*
    Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
    Output: [0,2]

    use number to conduct bitmask

     */
  const M = req_skills.length;
  const N = people.length;
  const skillMap = new Map<string, number>();
  for (let i = 0; i < M; i++) {
    skillMap.set(req_skills[i], 1 << i);
  }
  const peopleSkillMap = people.map((skillArr) => {
    let allSkillMask = 0;
    for (const skill of skillArr) {
      if (skillMap.has(skill)) {
        const skillMask = skillMap.get(skill)!;
        allSkillMask = allSkillMask | skillMask;
      }
    }
    return allSkillMask;
  });

  const dp = new Map<number, number[]>();
  dp.set(0, []); // 0 skillRequired, 0 people needed
  /*
  iterate two things 
  1. people
  2. exist combinations (use union skills as keys)
  */
  for (let i = 0; i < N; i++) {
    const existTeams = dp.entries();
    for (const [teamSkill, peopleInTeam] of existTeams) {
      const newSkillSet = teamSkill | peopleSkillMap[i];
      const newTeams = peopleInTeam.slice();
      newTeams.push(i);
      if (!dp.has(newSkillSet)) {
        dp.set(newSkillSet, newTeams);
      } else {
        const existTeam = dp.get(newSkillSet)!;
        if (existTeam.length > newTeams.length) {
          dp.set(newSkillSet, newTeams);
        }
      }
    }
  }

  return dp.get(2 ** M - 1)!;
}

function smallestSufficientTeamTLE(
  req_skills: string[],
  people: string[][]
): number[] {
  /*
    Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
    Output: [0,2]
     */

  let smallestSet = new Set<number>(
    new Array(people.length).fill(0).map((_, index) => index)
  );
  function permutation(
    i = 0,
    skillSet = new Set(req_skills),
    peopleSet = new Set<number>()
  ) {
    // return requried min people
    if (skillSet.size === 0) {
      if (peopleSet.size < smallestSet.size) {
        smallestSet = new Set(peopleSet);
      }
      return;
    }
    if (i >= people.length) return;

    // take
    const skillUsed: string[] = [];
    for (const skill of people[i]) {
      if (skillSet.has(skill)) {
        skillUsed.push(skill);
        skillSet.delete(skill);
      }
    }
    if (skillUsed.length > 0) {
      peopleSet.add(i);
      permutation(i + 1, skillSet, peopleSet);
      // recover
      peopleSet.delete(i);
      for (const skill of skillUsed) {
        skillSet.add(skill);
      }
    }

    // skip
    permutation(i + 1, skillSet, peopleSet);
  }
  permutation();

  return Array.from(smallestSet);
}

export { smallestSufficientTeam };
