export function ControlPanel() {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">게임 설정 변경</div>
      <div className="collapse-content">
        <div>
          <label htmlFor="num-player">플레이어 수</label>
          <input
            type="number"
            id="num-player"
            className="input max-w-xs"
            min="0"
          />
        </div>
      </div>
    </div>
  )
}
