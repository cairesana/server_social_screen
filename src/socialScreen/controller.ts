import { JsonController, Get, Post, HttpCode, Body, BadRequestError } from 'routing-controllers'
import SocialScreen from './entity';

@JsonController()
export default class SocialScreenController {

    @Get('/hashtags')
    async allHashtags() {
        const hashtags = await SocialScreen.find()
        return { hashtags }
    }

    @Post('/hashtags')
    @HttpCode(201)
    createSocialScreen(
        @Body() newSocialScreen: SocialScreen
    ) {
        const double = SocialScreen.findOne({ mediaId: newSocialScreen.mediaId});
        if (double) throw new BadRequestError("Item is already in database")
        newSocialScreen.save()
    }
}



