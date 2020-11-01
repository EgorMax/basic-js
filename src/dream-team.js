module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  const resUnsorted = [];
  const length = members.length;
  for (let i = 0; i < length; i++) {
    if (typeof members[i] === 'string') {
      const trimmedMember = members[i].trim();
      resUnsorted.push(trimmedMember[0].toUpperCase());
    }
  }
  return resUnsorted.sort().join('');
};
