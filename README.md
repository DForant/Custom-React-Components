# DF React Components

**A collection of React components created by Dean Forant.**


## Skillbar

The skillbar component was created when I was looking for a good percentage bar that could represent the level of experience I have in a single skill on my portfolio page. After trying several components that were available via codepen, Github etc... I came to the conclusion that I didn't really like any of them.

#### **Properties:**

label - The label of the skill. *default:'Your Skill Here'*
barWidth - The total width of the bar. *default:400px*
pct - The percentage of the skill (1-10). *default:50*

#### **Usage:**

<SkillBar label='My Skill' barWidth=500 pct=75/>

This will create a 500px skill bar with the label 'My Skill' of 75%


#### **Enhancements to be added in future releases:**

* Allow both px and relative units for width
* Allow user to specify color as a prop (hex, rgb, or Tailwind class)
