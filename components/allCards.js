import Card from '../components/card'

export default function allCards() {
    return (
        <div id="projects" className="h-full">
            <h2 className="pt-16">Projects</h2>
            <p>I have been studying with freecodecamp, mentoring and on my own.
            I've been doing the projects with the instructions of the responsive web design section of freecodecamp so they are 
            built only with css and Html.
            In my opinion, freecodecamp is the best that exists to start this knowledge, the guide they give, 
            the strategies they use helped 
            me a lot and I enjoy doing the exercises.
            In the mentoring I understood much more about the first languages, but the real challenge was with Js 
            (thank goodness the mentor is quite patient and understanding) and in codepen there are 
            most of the exercises that I did that time. But I fell in love with js and would really like to keep 
            learning what can be done with this language.
             Seeing that programmers that I follow in networks, 
            most of them work with React and Next, which is why I ventured and with what little I have, I love it.
            </p>
            <div className="grid sm:grid-cols-3 grid-rows-2 gap-3 mt-16">
                <div>
                    <img src="../gifs/survey-form.gif/" className="w-40" />
                    <a href="https://fcc-survey-form-page.vercel.app/">
                        <h3>Survey Form</h3>
                    </a>
                    <p>Survey of customer satisfaction after visiting the recently opened restaurant
                    that wich costumers opinions would improve
                    the service.</p>
                </div>
                <div>
                    <img src="../gifs/landing-page.gif/" className="w-40" />
                    <a href="https://fcc-landing-page-nine.vercel.app/">
                        <h3>Product Landing Page</h3>
                    </a>
                    <p>Home page of what can be in the future a search engine for skin care products of brands asossiated
                    with the page.
                    This project is build with HTML and CSS with the
                        Free Code Camp Responsive Project instructions</p>
                </div>
                <div>
                    <img src="../gifs/documentation-page.gif/" className="w-40" />
                    <a href="https://fcc-documentation-page.angela-goncalves.vercel.app/">
                        <h3>Technical Documentation Page</h3>
                    </a>
                </div>
                <div>
                    <img src="../gifs/tribute-page.gif/" className="w-40" />
                    <a href="https://fcc-tribute-page-eosin.vercel.app/">
                        <h3>Product Landing Page</h3>
                    </a>
                </div>
                <div>
                    <a href="https://codepen.io/angela-goncalves/pen/zYKZMba"></a>
                </div>
                <div>
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}