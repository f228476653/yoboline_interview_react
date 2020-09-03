
import React from 'react';

function Search(){
    return (
        <div className="pa4-l">
            <form className="bg-light-gray mw10 pa4 br2-ns ba b--black-10">
                <fieldset className="cf bn ma0 pa0">
                <legend className="pa0 f5 f4-ns mb3 black-80">Search your room</legend>
                    <div className="cf">
                        <input className="dib f5 ma2 input-reset ba b--black-20 pv3 ph4 border-box" type="search" placeholder="place" ></input>
                        <input className="dib f5 ma2 input-reset ba b--black-20 pv3 ph4 border-box" type="date" placeholder="from date"></input>
                        <p className="dib">to &nbsp;</p>
                        <input className="dib f5 ma2 input-reset ba b--black-20 pv3 ph4 border-box" type="date" placeholder="to date"></input>
                        <input className="dib input-reset bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" type="submit" value="Submit"></input>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
export default Search;
