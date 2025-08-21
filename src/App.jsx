import { create } from 'zustand'
import CodePreview from './components/CodePreview'
import Details from './components/Details'
import Scene from './components/Scene'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Viewport() {
  const { count, inc } = useStore()
  return (
    <div className="snippet-container">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Scene />
      <div className="main">
        <div className="code">
          <div className="code-container">
            <Viewport />
          </div>
        </div>
        <Details />
      </div>
    </>
  )
}
