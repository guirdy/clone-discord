import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon></AddCategoryIcon>
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="dark-souls" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
        </Container>
    );
};

export default ChannelList;
