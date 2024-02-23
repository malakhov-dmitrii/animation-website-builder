import SelectComponent from '../SelectComponent/SelectComponent'
import Button from '../UI-kit/Button/Button'
import Image from '../UI-kit/Image/Image'
import TextHeader from '../UI-kit/TextHeader/TextHeader'
import TextParagraph from '../UI-kit/TextParagraph/TextParagraph'

function Layout() {
    return (
        <section className='layout'>
            <div className='layout__page'>
                <SelectComponent>
                    <TextHeader />
                </SelectComponent>
                <SelectComponent>
                    <TextParagraph />
                </SelectComponent>
                <SelectComponent>
                    <Button />
                </SelectComponent>
                <SelectComponent>
                    <Image />
                </SelectComponent>
            </div>
        </section>
    )
}

export default Layout
