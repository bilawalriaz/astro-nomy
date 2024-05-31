import * as React from 'react';
import { Box } from '@mui/joy';
import { Card } from '@mui/joy';
import { CardContent } from '@mui/joy';
import { CardActions } from '@mui/joy';
import { Chip } from '@mui/joy';
import { Typography } from '@mui/joy';

export default function InfoNotice({ amenities = {} }) {
  // Convert the amenities object to an array of keys with truthy values
  const amenitiesList = Object.keys(amenities).filter(key => amenities[key]);

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
          {amenitiesList.length > 0 ? amenitiesList.join(', ') : 'No amenities available'}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
