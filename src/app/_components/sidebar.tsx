export function Sidebar() {
  return (
    <div className="drawer-side z-40 scroll-smooth">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        <li>
          <a>승률 계산기</a>
        </li>
        <li>
          <a>싱글 플레이</a>
        </li>
      </ul>
    </div>
  )
}
