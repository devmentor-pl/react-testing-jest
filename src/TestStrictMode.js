// ./src/TestStrictMode.js
import React, {StrictMode} from 'react';

class WillMount extends React.Component {
    componentWillMount() {
      // Use componentDidMount instead
    }
    render() {
      return null
    }
}

class StringRef extends React.Component {
    render() {
      // Use React.createRef instead
      return <div ref="stringRef" />
    }
  }

export default function TestStrictMode() {
    return <section>
        <StrictMode>
            <WillMount />
        </StrictMode>
        <StringRef />
    </section>
}