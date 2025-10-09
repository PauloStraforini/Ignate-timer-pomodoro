import { Play } from "lucide-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task"> Vou trabalaher em</label>
                    <input type="tasl" />

                    <label htmlFor="minutesAmount"> Durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>Minutos</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>
                        :
                    </Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <button type="submit">
                    <Play size={25} />
                    Start
                </button>
            </form>
        </HomeContainer>
    )
}