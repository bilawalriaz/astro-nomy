import * as React from 'react';
import {Box} from '@mui/joy';
import {Button} from '@mui/joy';
import {Card} from '@mui/joy';
import {CardContent} from '@mui/joy';
import {CardActions} from '@mui/joy';
import {Chip} from '@mui/joy';
import {Typography} from '@mui/joy';

export default function InfoNotice() {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: 'lg',
        width: 'full',
        maxWidth: '100%',
        marginTop: 3
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip size="sm" variant="soft" color='success'>
          Verified
        </Chip>
      </Box>
      <div>
        <Typography level="h2" textColor="white">
          What's it good for?
        </Typography>
      </div>
      <CardContent>
        <Typography level="body-md" textColor="white">
          Is kid friendly
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}