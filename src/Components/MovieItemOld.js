import React, { Component } from 'react'

// function Image(props) {
//     return <img width="100%" src={props.src} alt={props.alt} />;
// }

export default class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            like: false
        };
    }

    toggleOverview = () => {
        // console.log("show");
        this.setState({
            show: !this.state.show
        });
    };

    handleLike = () => {
        this.setState({
            like: !this.state.like
        });
    };

    render() {
        const {
            data: { title, vote_average, image, overview }
        } = this.props;
        // console.log(this.state);
        // console.log(this);
        return (
            <div style={{ width: "300px" }}>
                {/* <Image src={image} alt={title} /> */}
                <p>{title}</p>
                <p>{vote_average}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" onClick={this.toggleOverview}>
                        {this.state.show ? "hide" : "show"}
                    </button>
                    
                    <button
                        style={{ backgroundColor: this.state.like ? "red" : "white" }}
                        type="button"
                        onClick={this.handleLike}
                    >
                        {this.state.like ? "unLike" : "Like"}
                    </button>
                </div>
                {this.state.show ? <p>{overview}</p> : null}
            </div>
        );
    }
}

// function MovieItem(props) {
//   // console.log(props);
//   const { title, vote_average, image } = props.data;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }
