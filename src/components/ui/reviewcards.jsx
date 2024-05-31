import * as React from 'react';
import { Box } from '@mui/joy';
import { Card } from '@mui/joy';
import { CardContent } from '@mui/joy';
import { Typography } from '@mui/joy';

export default function ReviewCards({ reviews }) {
  // Ensure reviews is always an array
  const validReviews = Array.isArray(reviews) ? reviews : [];

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
      {validReviews.length > 0 ? (
        validReviews.map((review, index) => (
          <Card key={index} variant="plain">
            <CardContent>
              <Typography level="title-md">Review {index + 1}</Typography>
              <Typography>{review.text.text}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No reviews available</Typography>
      )}
    </Box>
  );
}
