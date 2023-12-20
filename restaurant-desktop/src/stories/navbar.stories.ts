import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavbarComponent } from '../../src/app/components/navbar/navbar.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent],
      imports:[HttpClientModule]
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
  providers: [HttpClient]
});

export const Default = Template.bind({});
Default.args = {
};
