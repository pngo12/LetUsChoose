import React, { Component } from 'react';

// class InputForm extends Component {  
//     state = {
//         isHidden: false,
//         hasSeenOption: false
//     }

//     formSubmit = e => {
//         e.preventDefault();
//     }
    
//     toggleHidden = () => this.setState({isHidden: !true})
    


    
//     // The below takes the input, filters the choices, and sets the random choice state to the random restaurant
//     randomize = () => {
//         // const chosenEthnicity = Data.filter(x => this.state.chosenEthn === 'No Preference' ? true : x.ethnicity === this.state.chosenEthn)
//         // const chosenGenre = Data.filter(x => this.state.chosenGn === 'No Preference' ? true : x.genre === this.state.chosenGn)
//         // let randomOptions;
        
//         // if (this.state.chosenEthn === 'No Preference' && this.state.chosenGn !== 'No Preference') {
//         //     randomOptions = chosenGenre;
//         // } else if (this.state.chosenEthn !== 'No Preference' && this.state.chosenGn === 'No Preference') {
//         //     randomOptions = chosenEthnicity;
//         // } else {
//         //     randomOptions = [...chosenEthnicity, ...chosenGenre];
//         // }

//         // const randomizeOptions = Math.floor(Math.random() * randomOptions.length)
//         // this.setState({
//         //     randomChoice: randomOptions[randomizeOptions],
//         //     hasSeenOption: true,
//         // })
//         // this.toggleHidden()
//     }

//     dualOnClick = () => {
//         this.randomize()
//         this.toggleHidden()
//     }

//     // Below resets the input and hides the result
//     Redraw = () => {
//             this.setState({
//             chosenEthn: 'No Preference',
//             chosenGn: 'No Preference',
//             isHidden: true
//         })
//     }

//     render() {
//         return ( 
//             <section className="section is-large" id="biggest-container">
//             <div className="columns">
//                     <div className="column is-4">
//             {/* Begin Form below */}
//             <form className="is-pulled-right" onSubmit={this.formSubmit}>
            
//                 <div className="field">
//                     <label className="label is-size-5">What type of food are you craving?</label>
//                     <div className="control">
//                         <div className="select">
//                         {/* <select value={this.state.chosenEthn} onChange={e => { this.setState({ chosenEthn: e.target.value })}}>
//                             {this.state.ethnicity.map(x => <option key={x} value={x}> {x}</option>)}
//                         </select> */}
//                     </div>
//                 </div>
//             </div>

//                 <div className="field">
//                     <label className="label is-size-5">What Genre?</label>
//                         <div className="control">
//                             <div className="select">
//                                 {/* <select value={this.state.chosenGn} onChange={e => {this.setState({chosenGn: e.target.value})}}>
//                                     {this.state.genre.map(x => <option key={x} value={x}> {x}</option>)}
//                         </select> */}
//                     </div>
//                 </div>
//             </div>
//                     <div className="control">
//                         <button className="button is-info is-medium" onClick={this.dualOnClick}>Randomize!</button>
//                     </div>
//                 </form>
//             </div>
//                 <div className="column is-1"></div>
//             <div className="column is-6">
//                 {/* The below will render the random restaurant && */}
//                 {/*  hides the result until random button is clicked */}
//                 {
//                     !this.state.isHidden && <RenderOption 
//                     randomChoice={this.state.randomChoice} 
//                     Redraw={this.Redraw}
//                     />
//                 }
//                 </div>
//             </div>
//     </section>
//          );
//     }
// }
// export default InputForm;

class InputForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Does this show up?
            </div>
         );
    }
}
 
export default InputForm;