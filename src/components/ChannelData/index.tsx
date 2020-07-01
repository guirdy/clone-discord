import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Guilherme Leandro"
                        date="01/07/2020"
                        content="Dark Souls é o melhor RPG."
                    />
                ))}

                <ChannelMessage 
                    author="Artorias"
                    date="01/07/2020"
                    content={
                        <>
                            <Mention>@Guilherme Leandro</Mention>, sou um bot e concordo com você!!
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage 
                    author="Solair of Astora"
                    date="01/07/2020"
                    content={
                        <>
                            <Mention>@Guilherme Leandro</Mention>, sou um bot offline e concordo com você também!!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;