import './AboutUsPage.css'
import { Hero } from './AboutUsComponents/Hero/Hero'
import { Collaboration } from './AboutUsComponents/Collaboration/Collaboration';
import { SamePage } from './AboutUsComponents/SamePage/SamePage';
import { FirstPage } from './AboutUsComponents/FirstPage/FirstPage';
import { CarruselBrand } from './AboutUsComponents/CarruselBrand/CarruselBrand';

export default function AboutUsPage() {
    return (
        <>
            <main>
                <Hero />
                <div className='AboutUs-Section'>
                    <SamePage />

                </div>

            </main>
        </>
    )
}