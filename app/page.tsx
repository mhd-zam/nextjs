"use client"
import axios from 'axios'
import useSWR from 'swr'
import { Card, Box, Stack, Typography, styled } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
export default function Home() {
  const fetcher = (url: string) => axios.get(url).then(response => response.data);
  const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher)

  if (isLoading)
  {
    return <h1>Loading .....</h1>
  }

  if (error)
  {
    return <h1>something went wrong</h1>
  }

  const CustomCard = styled(Card)({
    border: '5px solid',
    borderImage: 'linear-gradient(to right bottom, #430089, #82ffa1) 2',
    padding: 10,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  })


  return (
    <div>
      <Stack direction={'column'} gap={3} >
        {data.products.map((elemt, index) => (
          <CustomCard key={index} >

            <Typography variant='h1' color={'white'}><AppleIcon fontSize='30px' /> {elemt.title}</Typography>
          </CustomCard>
        ))}
      </Stack>
    </div>
  )
}
