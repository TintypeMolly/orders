import Table from './Table';
import Customer from './Customer';
import { FullTableError, ObjectNotFoundError } from '../error';

it('construction', () => {
    new Table(4, undefined);
});

it('add customer', () => {
    const table = new Table(4);
    table.addCustomer(new Customer('Akari'));
    table.addCustomer(new Customer('Yui'));
    table.addCustomer(new Customer('Kyouko'));
    table.addCustomer(new Customer('Chinatsu'));
    try {
        table.addCustomer(new Customer('Ayano'));
        expect(false).toBeTruthy();
    } catch(e) {
        expect(e instanceof FullTableError).toBeTruthy();
    }
});

it('remove', () => {
    const table = new Table(4);
    const akari = new Customer('Akari');
    const yui = new Customer('Yui');
    const kyouko = new Customer('Kyouko');
    const chinatsu = new Customer('Chinatsu');
    const ayano = new Customer('Ayano');

    table.addCustomer(akari);
    table.addCustomer(yui);
    table.addCustomer(kyouko);
    table.addCustomer(chinatsu);
    table.removeCustomer(akari);
    table.removeCustomer(yui);
    table.removeCustomer(kyouko);
    table.removeCustomer(chinatsu);
    try{
        table.removeCustomer(ayano);
        expect(false).toBeTruthy();
    } catch(e) {
        expect(e instanceof ObjectNotFoundError).toBeTruthy();
    }
});
