const attack = (creatureName, damage, isCritical) =>
  `${creatureName} dealt ${isCritical ? 2 * damage : damage} damage!`;

module.exports = { attack };
