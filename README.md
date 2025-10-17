# Test-task

## How to Run the Project

1. Clone the repository:

   git clone https://github.com/IvanVoshchepynets/test-task-devtoday.git

2. Navigate into the folder:

   cd test-task

3. Install dependencies and start the storybook:

   npm install

   npm run storybook

## Components Overview

### Input

- **Types:** `text`, `password`, `number`
- **Props:** `clearable`, `placeholder`, `disabled`
- **Buttons:** x _Clear_ and 👁 _Show/Hide_
- **Integration:** compatible with `React Hook Form`

---

### Toast

- **Types:** `success`, `error`, `info`
- **Position:** bottom-right corner
- **Behavior:** automatically disappears after the given `duration`
- **Animation:** smooth fade/slide transition
- **Extras:** manual close button (x)

---

### SidebarMenu

- **Animation:** slides in from the right
- **Structure:** supports nested submenus (_accordion style_)
- **UX:** closes when clicking outside the menu
- **Visuals:** highlights the active item

## Components Screenshots

### Storybook UI

![Storybook Overview](./docs/screenshots/storybook-overview.png)

### Input Component

![Input Text](./docs/screenshots/input-text.png)
![Input Number](./docs/screenshots/input-number.png)
![Password Input](./docs/screenshots/input-password.png)

### Toast Component

![Toast Success](./docs/screenshots/toast-success.png)
![Toast Error](./docs/screenshots/toast-error.png)
![Toast Info](./docs/screenshots/toast-info.png)

### Sidebar Menu

![Sidebar Open](./docs/screenshots/sidebar-open.png)
![Sidebar Nested1](./docs/screenshots/sidebar-nested1.png)
![Sidebar Nested2](./docs/screenshots/sidebar-nested2.png)

### Input + Hook Form

![Hook Form](./docs/screenshots/hookform-validation.png)
![Hook Form Success](./docs/screenshots/hookform-success.png)
