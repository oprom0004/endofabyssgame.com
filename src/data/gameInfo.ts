export interface BossInfo {
  name: string;
  location: string;
  dangerLevel: string;
  weakness: string;
  description: string;
  recommendedWeapon: string;
}

export interface WeaponInfo {
  name: string;
  type: string;
  ammoType: string;
  specialAbility: string;
  description: string;
}

export const GAME_DETAILS = {
  title: 'End of Abyss',
  developer: 'Section 9 Interactive',
  publisher: 'Epic Games Publishing',
  releaseDate: 'October 1, 2026',
  price: '$29.99',
  genre: 'Sci-Fi Survival Horror / Metroidvania Twin-Stick Shooter',
  engine: 'Unreal Engine 5',
  protagonist: 'Cel (Combat Technician & Bio-Facility Specialist)',
  platforms: ['PC (Epic Games Store)', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch 2 (TBA)'],
  steamEstimatedDate: 'Late 2027 (Expected after 12-Month Timed Exclusivity)',
};

export const BOSS_ROSTER: BossInfo[] = [
  {
    name: 'Goliath Sub-Anomaly 04',
    location: 'Sector Gamma - Heavy Industrial Smelter',
    dangerLevel: 'CRITICAL (Tier 4)',
    weakness: 'Exposed Cooling Vents & Rear Chitin Joints',
    description: 'A massive biomechanical amalgam forged from industrial mining machinery and mutagenic bio-tissue. Swings high-torque crushing claw arms and emits thermal radiation shockwaves.',
    recommendedWeapon: 'Overcharged Plasma Cutter + EMP Flash Grenades',
  },
  {
    name: 'The Hydroponic Matriarch',
    location: 'Sector Beta - Botanical Bio-Dome',
    dangerLevel: 'EXTREME (Tier 3)',
    weakness: 'Phosphorus Burn / Central Optic Node',
    description: 'An aggressive parasitic entity deeply rooted into the bio-facility irrigation channels. Spawns swarms of airborne spore drones and sweeps the catwalk with thorned tentacles.',
    recommendedWeapon: 'Incendiary Scattergun & Thruster Dash',
  },
  {
    name: 'The Deep Core Architect',
    location: 'Sub-Level 10 - The Abyssal Void Gate',
    dangerLevel: 'APOCALYPTIC (Final Boss)',
    weakness: 'Phase Shifts during Chrono-Pulse Overload',
    description: 'The cyber-synthetic consciousness controlling the entire subterranean complex. Warps reality, alters gravity plates, and summons holographic clones of past facility engineers.',
    recommendedWeapon: 'Max-Upgraded Rail Cannon & Kinetic Shield Rebound',
  },
];

export const WEAPONS_ARSENAL: WeaponInfo[] = [
  {
    name: 'Tactical Plasma Carbine',
    type: 'Assault Energy Rifle',
    ammoType: 'Battery Cells (Standard)',
    specialAbility: 'Charged Piercing Beam',
    description: 'Cel\'s baseline service weapon. Reliable rate of fire, accurate at mid-range, with pinpoint recoil control for targeting alien weak spots.',
  },
  {
    name: 'Heavy Arc Scattergun',
    type: 'High-Impact Kinetic Shotgun',
    ammoType: 'Heavy Slugs',
    specialAbility: 'Stun Concussion Shockwave',
    description: 'Devastating close-quarters stopping power. Capable of shattering armored carapace on mutated heavy bio-mech stalkers in two clean blasts.',
  },
  {
    name: 'Mag-Pulse Rail Cannon',
    type: 'Anti-Materiel Sniper System',
    ammoType: 'Depleted Tungsten Darts',
    specialAbility: 'Multi-Target Core Penetration',
    description: 'High-precision long-range railgun that punctures through reinforced facility blast doors and multiple hostiles in a straight vector.',
  },
  {
    name: 'Cryo-Thermal Flame Jet',
    type: 'Area Denial Chemical Projector',
    ammoType: 'Pressurized Liquid Gel',
    specialAbility: 'Thermal Shock Reaction (Freeze & Melt)',
    description: 'Dual-mode projector. Freezes organic matter to make it brittle, followed by intense high-temperature incineration for massive shatter damage.',
  },
];
