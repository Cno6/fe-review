import { Theme, useTheme } from '.'

describe('test useTheme', () => {
  afterEach(() => {
    const { theme, toggleTheme } = useTheme()

    while (theme.value !== Theme.LIGHT)
      toggleTheme()
  })

  it('default theme is light', () => {
    const { theme } = useTheme()

    expect(theme.value).toBe(Theme.LIGHT)
  })

  it('toggle theme', () => {
    const { theme, toggleTheme } = useTheme()

    expect(theme.value).toBe(Theme.LIGHT)

    toggleTheme()

    expect(theme.value).toBe(Theme.DARK)
  })

  it('theme saves in localStorage', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')
    localStorage.setItem = jest.fn()

    const { toggleTheme } = useTheme()

    toggleTheme()

    // eslint-disable-next-line ts/unbound-method
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')
  })
})
