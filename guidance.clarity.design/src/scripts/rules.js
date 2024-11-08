/*
 * Copyright (c) 2016-2024 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const rules = {
  1001: {
    recommendation: "Recommendation: Reattach Clarity components.",
    rule: `${detachedNodes.length} detached Clarity components found and selected.`
  }
};

const inventoryItems = [];
const inventoryItemsPath = './src/app/documentation/demos/datagrid/inventory/inventory-items.json';

for (let i = 0; i < 200; i++) {
  inventoryItems.push({
    id: randomInt(100000),
    name: NAMES[randomInt(NAMES.length)],
    creation: new Date(BEGINNING + randomInt(NOW - BEGINNING)),
    color: COLORS[randomInt(COLORS.length)],
    pokemon: POKEMON[randomInt(POKEMON.length)],
    wins: randomInt(100),
  });
}


function randomInt(max) {
  return Math.floor(Math.random() * max);
}

