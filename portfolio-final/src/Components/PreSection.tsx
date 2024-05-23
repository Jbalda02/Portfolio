
import React from 'react';

class PreSection extends React.Component<{ImageToLoad: string}> {
    constructor(props: {ImageToLoad: string}) {
        super(props);
        this.state = {
        };
    }



    render() {
        const { ImageToLoad } = this.props;
        return (
        <div className='flex justify-center px-1 py-1'>


            <img src={ImageToLoad} 
            className='
             object-cover object-center
            w-full h-auto max-h-64 max-w-full border-solid border-lime-500 rounded-lg' alt="Section Image"  />
        </div>
        );
    }
}

export default PreSection;
/* Add State and make it a class */