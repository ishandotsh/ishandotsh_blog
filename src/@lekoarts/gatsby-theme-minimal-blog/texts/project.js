import * as React from 'react'
import { cards, card_image, card_content, card_info, card_link } from './project.module.css'

const Project = () => {
  return (
    <div className={cards}>
        <div>
            <img className={card_image} src={"/projects/project1_banner.gif"} alt="Project 1" />
            <div className={card_content}>
                <h3>
                    Toy Image Search Engine
                </h3>
                <p>
                    Upload an image and find images containing the same object or
                    images with a similar situation (for example: a crowd of people)
                </p>
            </div>
            <div className={card_info}>
                <div>
                    <a href={"./toy-image-search-engine"} className={card_link}>View Article</a>
                </div>
                <div>
                    <a href={"https://github.com/ishandotsh/resnet-search-engine"} rel="noreferrer" target="_blank" className={card_link}>Github</a>
                </div>
                <div>
                    <a href={"https://resnet-search-engine.herokuapp.com/"} className={card_link} rel="noreferrer" target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
        <div>
            <img className={card_image} src={"/projects/project2_banner.png"} alt="Project 2" />
            <div className={card_content}>
                <h3>
                    Minimax Visualizer
                </h3>
                <p>
                    A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.
                </p>
            </div>
            <div className={card_info}>
                <div>
                    <a href={"https://github.com/ishandotsh/minimax-visualizer"} rel="noreferrer" target="_blank" className={card_link}>Github</a>
                </div>
                <div>
                    <a href={"https://minimaxttt.netlify.app/"} className={card_link} rel="noreferrer" target="_blank">Live Demo</a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Project
