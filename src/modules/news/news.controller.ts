import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { NewsService } from './news.service';
import { Response } from 'express';

@Controller('v1')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  
  
  @Get('top-ten-most-occuring-words-in-last255-stories')
  async tenTopWordsInLast25Stories(@Res() res: Response) {
   const foundTopTenMostOccurringWords = await this.newsService.topTenWordsInLast25Stories()
      return res.status(HttpStatus.OK).json(foundTopTenMostOccurringWords);
    }
    
  
  
    @Get('top-words-in-last600-stories-of-users')
  async getTopWordsInLast600StoriesOfUsers(@Res() res: Response) {
    const foundTopTenMostOccurringWords = await this.newsService.topWordsInLast600StoriesOfUsers()
      return res.status(HttpStatus.OK).json(foundTopTenMostOccurringWords);
    }

 
 
    @Get('top-words-in-story-of-last-week:storyId')
  async getTopWordsInStoryOfLastWeek(
    @Res() res: Response,
    @Param('storyId') storyId: number,
  ) {
    const foundTopWordsInStoryOfLastWeek = await this.newsService.topWordsInStoryOfLastWeek(storyId)
      return res.status(HttpStatus.OK).json(foundTopWordsInStoryOfLastWeek);
    }
  }
