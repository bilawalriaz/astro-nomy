import * as React from 'react';
import {Box} from '@mui/joy';
import {Card} from '@mui/joy';
import {CardContent} from '@mui/joy';
import {Typography} from '@mui/joy';

export default function ReviewCards() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 750,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Card variant="plain">
        <CardContent>
          <Typography level="title-md">Review 1</Typography>
          <Typography>We drive 30 mins to get here as its the best chicken place I have eaten at, food is always hot and fresh 100% reccomend</Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Review 2</Typography>
          <Typography>Every weekend I look for a different place to order from then end up coming back to Virginias, one of my most favourite places to eat from there food gets delivered steaming hot never have a complain about there food or service, easy to place orders over the phone and on food apps, definitely will just stick to this place we never get bored of it, and the chips are lovely there give you a great portion, thanks guys your all doing amazing ☺️</Typography>
        </CardContent>
      </Card>

      <Card variant="soft">
        <CardContent>
          <Typography level="title-md">Soft card</Typography>
          <Typography>I always order Chicken burger and hot wings. Delicious,juicy, cheap. Definitely will order again and again and again.</Typography>
        </CardContent>
      </Card>

      <Card variant="solid">
        <CardContent>
          <Typography level="title-md" textColor="inherit">
            Solid card
          </Typography>
          <Typography textColor="inherit">So, I ordered 1 burger spicy with cheese and 3 wings got charged £11.90 I was told to come back but I was working till 6 so I was told they will leave a note by the till, I came to the store just to get told there’s no note and that I will need to come back tomorrow for the money rather than sorting the issue because it’s a hassle for something that’s there mistake, pointless for me to come back and waste fuel. But nevertheless the staff need to pay attention so check your orders and how much you pay.</Typography>
        </CardContent>
      </Card>

      
    </Box>
  );
}