import styled from "styled-components";

const DiscussWrapper = styled.div`
    background-color:none;
    margin: 1.5rem 0.625rem 1rem;
    overflow: hidden;
    h2{
        font-weight: 500;
    }
    h2 span{
        color:#fff;
    }
    .logo{
        width: 200px;
    }
    .explain {
        padding-top: 0rem;
        text-align: center;
        p { 
            text-align: center;
            color: #fff;
            padding: 0px 3.125rem;
        }
        h2 {
            color: #fff;  
        }
        h1 {
            padding: 1.25rem 0px;
        }
        .cards {
            margin: 0.15rem auto 0 ;
            max-width: 50rem;
            padding: 1.5rem 2rem 0rem 2rem;
            background-color: none;
            border-radius: 25px;
            .card {
                -webkit-transition: 450ms all;
                transition: 450ms all;
                margin: auto;
                background-color: #1E2117; 
                border-radius: 25px;
                overflow: hidden;
                .parentcard {
                    padding: 1.25rem;
                }
                p {
                    text-align: center;
                    padding: 0px 0px 1px 0px;
                    letter-spacing: 0;
                    font-size: 1.25rem;
                }
                h2 {
                    text-align: center;
                    font-size: 28px;
                    text-transform:uppercase;
                    clear: both;
                    margin-bottom: 0rem;
                    margin-top: 1rem;
                }
                &:hover,
                &:focus {
                   outline: none;
                }
                &:hover{
                    transform: translateY(0.03rem);
                    box-shadow: 0 2px 10px #00d3a9;
                }
                }
            }
        }
    }

    button{
        color: #1E2117;
        padding: 0.2em 1em;
        border: 2px solid;
        background: none;
        transition: color 0.25s,border-color 0.25s,transform 0.25s,box-shadow 0.25s;
        cursor: pointer;
    }
    @media only screen and (min-width: 990px){
        @media only screen and (min-width: 1211px){
            .explain {
                .cards {
                    padding: 0 0.5rem 1rem 0.5rem;
                    .card {
                        width: 23.25rem;
                    }  
                }
            }
        }
        @media only screen and (max-width: 1210px){
            .explain {
                .cards {
                    padding: 0 0.5rem 1rem 0.5rem;
                        h2 {
                            font-size: 25px;
                            line-height: 35px;
                        }
                        p {
                            font-size: 1.1rem;
                        }
                    }
                }
            }
        }
        @media only screen and (max-width: 1100px){
            .explain {
                .cards {
                    padding: 0 0.5rem 1rem 0.5rem;
                    .card {
                        h2 {
                            font-size: 22px;
                            line-height: 32px;
                        }
                        p {
                            font-size: 1rem;
                            line-height: 23px;
                        }
                    }
                }
                button {
                    padding: 0;
                }
            }
        }
    }
    @media only screen and (max-width: 450px){
        .explain {
            .cards {
                padding: 1rem 1rem 1rem 1rem;
                .card {
                    .parentcard {
                        padding: 0.5rem;
                    }
                    h2 {
                        font-size: 25px;
                    }
                    p{
                        font-size: 1.1rem;  
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 375px){
        .explain {
            .cards {
                padding: 1rem .5rem 1rem .5rem;
                h2 {
                    font-size: 22px;
                }
                p{
                    font-size: 1rem;  
                }
            }
        }
    } 
`;

export default DiscussWrapper;
