# regulus
An app that helps handling dilemma situations. 

## The Idea

### User 
    > Defines the characters
        User enters the number of chars exist,
        User enters the name of every chars,
    > Defines the characters options
        User enters the options of every chars
    > Defines the characters positions
        User enters the 
    > Defines the stated intentions of every chars

    > Defines doubts that exist on every characters positions

### Regulus
    > Compute the possible conflict point by highlighting

    > Compute the dilemmas: trust, rejection, and persuasion 



## References:
https://dramatheory.wordpress.com



## Test
```
=IF(PositionAB2="","",IF(PositionA2="","No dilemma",IF(PositionAB2="-","No dilemma",IF(AND(PositionA2=SI_A2,PositionA2=PositionAB2,DoubtAB2=""),"No dilemma",IF(AND(LEFT(PositionA2,1)=SI_A2,DoubtAB2="?"),CONCATENATE(CHAR_B," has Trust dilemma with ",CHAR_A),IF(AND(DoubtAB2="",LEFT(PositionA2,1)<>LEFT(PositionAB2,1),LEFT(PositionAB2,1)<>SI_A2,LEFT(PositionAB2,2)<>"?"),CONCATENATE(CHAR_B," has Persuasion dilemma with ",CHAR_A," in Position and Threat Mode"),IF(AND(PositionA2=SI_A2,DoubtAB2="",LEFT(PositionA2,1)<>PositionAB2, PositionAB2<>"-"),CONCATENATE(CHAR_B," has Persuasion dilemma with ",CHAR_A," in Position Mode"),IF((AND(PositionAB2<>SI_A2,DoubtAB2="")),CONCATENATE(CHAR_B," has Persuasion dilemma with ",CHAR_A," in Threat Mode "),""))))))))
```
