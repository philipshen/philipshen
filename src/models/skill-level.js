import Color from '../styles/color'

export const SkillLevel = {
    NOOB: 0,
    ADEPT: 1,
    COMPETENT: 2,
    INTERMEDIATE: 3,
    ADVANCED: 4,
    MASTER: 5
}

export const SkillLevelConfig = new Map([
    [SkillLevel.NOOB, {
        color: Color.noob_color,
        name: "Noob"
    }],
    [SkillLevel.ADEPT, {
        color: Color.adept_color,
        name: "Adept"
    }],
    [SkillLevel.COMPETENT, {
        color: Color.competent_color,
        name: "Competent"
    }],
    [SkillLevel.INTERMEDIATE, {
        color: Color.intermediate_color,
        name: "Intermediate"
    }],
    [SkillLevel.ADVANCED, {
        color: Color.advanced_color,
        name: "Advanced"
    }],
    [SkillLevel.MASTER, {
        color: Color.master_color,
        name: "Master"
    }],
])