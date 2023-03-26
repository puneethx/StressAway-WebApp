<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<footer class="footer">
    <div class="footer__container">
        <div class="footer__top">
            <div class="company__info">
                <h2 class="company__logo">StressAway</h2>
                <p class="company__description">
                    StressAway is a product that enhances the mood of 
                    a person by recommending stress relief ways based 
                    on the journal written by the person.
                </p>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-facebook-circle-line"></i>
                        </a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-twitter-line"></i>
                        </a>
                    </li>
                </ul>
                <span class="copyright">&copy;2023 StressAway. All rights reserved.</span>
            </div>

            <div class="foo">
                <h6 class="footer__title">Rion Dsilva</h6>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">LinkedIn</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">Github</a>
                    </li>
                
                </ul>
            </div>

            <div class="foot">
                <h6 class="footer__title">Puneeth Reddy</h6>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">LinkedIn</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">Github</a>
                    </li>
                    
                </ul>
            </div>

            <div class="foote">
                <h6 class="footer__title">Aniesh Reddy</h6>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">LinkedIn</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<style>
    
  i {
    font-size: 2rem;
}
.foo{
    padding-left: -20px;
}
.foot{
    padding-left: -30px;
}
.foote{
    padding-left: -20px;
}
.footer {
    padding-block: 1rem;
    background-color: #151823;
    color: #666873;
    font-family: 'Poppins', sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
}
.footer__container {
    max-width: 116rem;

    margin: auto;
    padding: 0 1.5rem;
}

.footer__top {
    display: grid;
    grid-template-columns: 
    repeat(auto-fit, minmax(20rem, 1fr));
    row-gap: 2rem;
}
.footer__title {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 2rem;
}
.footer__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.footer__list-item {
    list-style: none;
}
.footer__list-link {
    text-decoration: none;
    color: inherit;
    transition: color .25s;
}
.footer__list-link:hover {
    color: #fff;
}

.company__info {
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
}
.company__logo {
    color: #63CCAB;
}
.company__info ul {
    flex-direction: row;
}
.copyright {
    margin-top: auto;
}
@media screen and (min-width: 40em) {
    .company__info {
        grid-column: span 2;
    }
}

/* layout/base.css */

* {
  box-sizing: inherit;
}
</style>