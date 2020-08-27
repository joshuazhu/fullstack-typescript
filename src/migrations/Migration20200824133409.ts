import { Migration } from '@mikro-orm/migrations';

export class Migration20200824133409 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" add column "password" text not null;');
  }

}
