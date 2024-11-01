import { StyleInput, StyleTextInput } from "./style"

export const InputPages = ({ propsname, propsplaceholder, propstype }) => {

    return (
        <div>
            <StyleTextInput>
                {propsname}
            </StyleTextInput>

            <StyleInput
                placeholder={propsplaceholder}
                type={propstype} />
        </div>
    )
}