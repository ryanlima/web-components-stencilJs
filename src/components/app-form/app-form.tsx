import { Component, h, State, Event, EventEmitter, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: './app-form.css',
  shadow: true,
})

export class AppForm implements ComponentInterface {
  @State() task: string = ''
  @Event() addTask: EventEmitter

  private textInput?: HTMLInputElement

  handleSubmit = (ev: Event) => {
    ev.preventDefault()
    if (this.task.trim()) {
      this.addTask.emit(this.task)
      this.task = ''
      this.textInput.focus()
    }
  }

  handleInput = (ev: Event) => {
    const field = ev.target as HTMLInputElement
    this.task = field.value
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onInput={this.handleInput}
          value={this.task}
          ref={el => this.textInput = el as HTMLInputElement}
          type="text"
        />
        <button>Adicionar</button>
      </form>
    );
  }
}