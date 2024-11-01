import {
    SideBar, DivHome, IconeHome,
    DivCompass, IconeCompass, DivPlusSquare, IconePlusSquare, DivBell,
    IconeBell, DivMessage, IconeMessage, DivIcons, DivIconeHexagon, DivHexagon,
    IconeHexagon
} from "./style"


export const MenuLateral = () => {

    return (
        <div>
            <SideBar>
                <DivIcons>
                    <DivHome>
                        <IconeHome />
                    </DivHome>

                    <DivCompass>
                        <IconeCompass />
                    </DivCompass>

                    <DivPlusSquare>
                        <IconePlusSquare />
                    </DivPlusSquare>

                    <DivBell>
                        <IconeBell />
                    </DivBell>

                    <DivMessage>
                        <IconeMessage />
                    </DivMessage>
                </DivIcons>

                <DivIconeHexagon>
                    <DivHexagon>
                        <IconeHexagon />
                    </DivHexagon>
                </DivIconeHexagon>
            </SideBar>
        </div>
    )
}