import { TestBed } from '@angular/core/testing';

import { InitialStateService } from './initial-state.service';

describe('InitialStateService', () => {
  let service: InitialStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // etanks

  it('etanks() should return A1', () => {
    const etanks = service.etanks();
    expect(etanks.xy).toEqual('A1');
  });

  // airman

  it('airman().name should return Airman', () => {
    const boss = service.airman();
    expect(boss.name).toEqual('Airman');
  });

  it('undefeated airman() should return D2', () => {
    const boss = service.airman();
    expect(boss.xy.xy).toEqual('D2');
  });

  it('defeated airman() should return E3', () => {
    const boss = service.airman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('E3');
  });

  // bubbleman

  it('bubbleman().name should return Bubbleman', () => {
    const boss = service.bubbleman();
    expect(boss.name).toEqual('Bubbleman');
  });

  it('undefeated bubbleman() should return C3', () => {
    const boss = service.bubbleman();
    expect(boss.xy.xy).toEqual('C3');
  });

  it('defeated bubbleman() should return D1', () => {
    const boss = service.bubbleman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('D1');
  });

  // crashman

  it('crashman().name should return Crashman', () => {
    const boss = service.crashman();
    expect(boss.name).toEqual('Crashman');
  });

  it('undefeated crashman() should return E2', () => {
    const boss = service.crashman();
    expect(boss.xy.xy).toEqual('E2');
  });

  it('defeated crashman() should return C5', () => {
    const boss = service.crashman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('C5');
  });

  // flashman

  it('flashman().name should return Flashman', () => {
    const boss = service.flashman();
    expect(boss.name).toEqual('Flashman');
  });

  it('undefeated flashman() should return E4', () => {
    const boss = service.flashman();
    expect(boss.xy.xy).toEqual('E4');
  });

  it('defeated flashman() should return C1', () => {
    const boss = service.flashman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('C1');
  });

  // heatman

  it('heatman().name should return Heatman', () => {
    const boss = service.heatman();
    expect(boss.name).toEqual('Heatman');
  });

  it('undefeated heatman() should return D5', () => {
    const boss = service.heatman();
    expect(boss.xy.xy).toEqual('D5');
  });

  it('defeated heatman() should return B2', () => {
    const boss = service.heatman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('B2');
  });

  // metalman

  it('metalman().name should return Metalman', () => {
    const boss = service.metalman();
    expect(boss.name).toEqual('Metalman');
  });

  it('undefeated metalman() should return E1', () => {
    const boss = service.metalman();
    expect(boss.xy.xy).toEqual('E1');
  });

  it('defeated metalman() should return E5', () => {
    const boss = service.metalman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('E5');
  });

  // quickman

  it('quickman().name should return Quickman', () => {
    const boss = service.quickman();
    expect(boss.name).toEqual('Quickman');
  });

  it('undefeated quickman() should return C4', () => {
    const boss = service.quickman();
    expect(boss.xy.xy).toEqual('C4');
  });

  it('defeated quickman() should return B4', () => {
    const boss = service.quickman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('B4');
  });

  // woodman

  it('woodman().name should return Woodman', () => {
    const boss = service.woodman();
    expect(boss.name).toEqual('Woodman');
  });

  it('undefeated woodman() should return B5', () => {
    const boss = service.woodman();
    expect(boss.xy.xy).toEqual('B5');
  });

  it('defeated woodman() should return D3', () => {
    const boss = service.woodman();
    boss.toggleIsDefeated();
    expect(boss.xy.xy).toEqual('D3');
  });

});
