ServerEvents.recipes(event => {
    event.shaped('1x spectrum:quitoxic_reeds', [
      'SAS',
      'S S',
      'SAS'
    ], {
      S: 'minecraft:sugar_cane',
      A: 'spectrum:green_pigment'
    }),
    event.shaped('1x ftbquests:book', [
      'SA ',
      '   ',
      '   '
    ], {
      S: 'minecraft:book',
      A: 'minecraft:stone'
    }),
    event.shaped('1x croparia:seed_crop_copper', [
        'SAS',
        'SCS',
        'SAS'
      ], {
        S: 'minecraft:wheat_seeds',
        A: 'minecraft:copper_ingot',
        C: 'croparia:croparia2'
      })
      event.shaped('ad_astra:earth_globe', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'minecraft:water_bucket',
        B: Item.of('minecraft:flint_and_steel', '{Damage:0}'),
        C: 'artifacts:cloud_in_a_bottle',
        D: 'minecraft:grass_block',
        E: 'ad_astra:moon_globe',
        F: 'minecraft:diamond_ore',
        G: 'minecraft:oak_log',
        H: 'minecraft:oak_sapling',
        I: 'minecraft:stone',
      })
      event.shaped('ad_astra:mars_globe', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'ad_astra:ostrum_plating_button',
        B: 'ad_astra:mars_cobblestone',
        C: 'ad_astra:mars_iron_ore',
        D: 'ad_astra:ostrum_block',
        E: 'ad_astra:earth_globe',
        F: 'ad_astra:mars_ostrum_ore',
        G: 'ad_astra:ostrum_fluid_pipe',
        H: 'ad_astra:mars_diamond_ore',
        I: 'ad_astra:mars_ice_shard_ore',
      })
      event.shaped('ad_astra:venus_globe', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'ad_astra:calorite_plating_button',
        B: 'ad_astra:venus_sandstone',
        C: 'ad_astra:venus_coal_ore',
        D: 'ad_astra:calorite_block',
        E: 'ad_astra:mars_globe',
        F: 'ad_astra:venus_gold_ore',
        G: 'ad_astra:calorite_pillar',
        H: 'ad_astra:venus_calorite_ore',
        I: 'ad_astra:venus_diamond_ore',
      })
      event.shaped('ad_astra:mercury_globe', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'ad_astra:calorite_plating_button',
        B: 'ad_astra:mercury_stone',
        C: 'ad_astra:mercury_iron_ore',
        D: 'ad_astra:calorite_block',
        E: 'ad_astra:venus_globe',
        F: 'ad_astra:calorite_ingot',
        G: 'ad_astra:calorite_pillar',
        H: 'ad_astra:calorite_ingot',
        I: 'ad_astra:calorite_ingot',
      })
      event.shaped('ad_astra:glacio_globe', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'ad_astra:glacian_leaves',
        B: 'ad_astra:glacio_stone',
        C: 'ad_astra:glacio_ice_shard_ore',
        D: 'ad_astra:glacian_log',
        E: 'ad_astra:mercury_globe',
        F: 'ad_astra:glacio_coal_ore',
        G: 'ad_astra:glacio_lapis_ore',
        H: 'ad_astra:glacio_iron_ore',
        I: 'ad_astra:glacio_copper_ore',
      }),
      event.shapeless('minecraft:paper', ['croparia:fruit_paper'])
      event.shapeless('minecraft:gunpowder', ['croparia:fruit_powder'])
      event.shapeless('minecraft:spider_eye', ['croparia:fruit_eye'])
      event.shapeless('minecraft:bone', ['croparia:fruit_bone'])
      event.shapeless('minecraft:ender_pearl', ['croparia:fruit_ender'])
      event.shapeless('minecraft:prismarine_crystals', ['croparia:fruit_crystal'])
      event.shapeless('minecraft:prismarine_shard', ['croparia:fruit_shard'])
      event.shapeless('minecraft:quartz', ['croparia:fruit_quartz'])
      event.shapeless('minecraft:glowstone_dust', ['croparia:fruit_glowstone'])
      event.shapeless('minecraft:clay_ball', ['croparia:fruit_clay'])
      event.shapeless('minecraft:emerald', ['croparia:fruit_emerald'])
      event.shapeless('minecraft:diamond', ['croparia:fruit_diamond'])
      event.shapeless('minecraft:redstone', ['croparia:fruit_redstone'])
      event.shapeless('minecraft:lapis_lazuli', ['croparia:fruit_lapis'])
      event.shapeless('minecraft:gold_ingot', ['croparia:fruit_gold'])
      event.shapeless('minecraft:iron_ingot', ['croparia:fruit_iron'])
      event.shapeless('minecraft:coal', ['croparia:fruit_coal'])
      event.shapeless('croparia:elematilius', ['croparia:fruit_elemental'])
      event.shapeless('minecraft:sugar', ['croparia:fruit_sugar'])
      event.shapeless('minecraft:charcoal', ['croparia:fruit_charcoal'])
      event.shapeless('minecraft:flint', ['croparia:fruit_flint'])
      event.shapeless('minecraft:magma_cream', ['croparia:fruit_magma'])
      event.shapeless('minecraft:firework_rocket', ['croparia:fruit_firework'])
      event.shapeless('minecraft:nether_brick', ['croparia:fruit_nether'])
      event.shapeless('minecraft:ghast_tear', ['croparia:fruit_ghast'])
      event.shapeless('minecraft:leather', ['croparia:fruit_leather'])
      event.shapeless('minecraft:blaze_rod', ['croparia:fruit_blaze'])
      event.shapeless('minecraft:shulker_shell', ['croparia:fruit_shell'])
      event.shapeless('minecraft:nether_star', ['croparia:fruit_star'])
      event.shapeless('minecraft:string', ['croparia:fruit_string'])
      event.shapeless('minecraft:slime_ball', ['croparia:fruit_slime'])
      event.shapeless('minecraft:oak_log', ['croparia:fruit_oak'])
      event.shapeless('minecraft:spruce_log', ['croparia:fruit_spruce'])
      event.shapeless('minecraft:birch_log', ['croparia:fruit_birch'])
      event.shapeless('minecraft:jungle_log', ['croparia:fruit_jungle'])
      event.shapeless('minecraft:acacia_log', ['croparia:fruit_acacia'])
      event.shapeless('minecraft:dark_oak_log', ['croparia:fruit_darkoak'])
      event.shapeless('minecraft:golden_apple', ['croparia:fruit_goldenapple'])
      event.shapeless('minecraft:bread', ['croparia:fruit_bread'])
      event.shapeless('minecraft:totem_of_undying', ['croparia:fruit_totem'])
      event.shapeless('minecraft:wither_skeleton_skull', ['croparia:fruit_wither'])
      event.shapeless('minecraft:dragon_egg', ['croparia:fruit_dragon'])
      event.shapeless('minecraft:netherite_scrap', ['croparia:fruit_netherite'])
      event.shapeless('minecraft:copper_ingot', ['croparia:fruit_copper'])
      event.shapeless('minecraft:amethyst_shard', ['croparia:fruit_amethyst'])
      event.shapeless('modern_industrialization:tin_ingot', ['croparia:fruit_tin'])
      event.shapeless('techreborn:zinc_ingot', ['croparia:fruit_zinc'])
      event.shapeless('modern_industrialization:nickel_ingot', ['croparia:fruit_nickel'])
      event.shapeless('modern_industrialization:bronze_ingot', ['croparia:fruit_bronze'])
      event.shapeless('techreborn:advanced_alloy_ingot', ['croparia:fruit_advanced_alloy'])
      event.shapeless('techreborn:refined_iron_ingot', ['croparia:fruit_refined_iron'])
      event.shapeless('modern_industrialization:steel_ingot', ['croparia:fruit_steel'])
      event.shapeless('modern_industrialization:lead_ingot', ['croparia:fruit_lead_metal'])
      event.shapeless('modern_industrialization:silver_ingot', ['croparia:fruit_silver_metal'])
      event.shapeless('modern_industrialization:electrum_ingot', ['croparia:fruit_electrum'])
      event.shapeless('modern_industrialization:iridium_ingot', ['croparia:fruit_iridium'])
      event.shapeless('modern_industrialization:platinum_ingot', ['croparia:fruit_platinum'])
      event.shapeless('modern_industrialization:tungsten_ingot', ['croparia:fruit_tungsten'])
      event.shapeless('techreborn:hot_tungstensteel_ingot', ['croparia:fruit_hot_tungstensteel'])
      event.shapeless('techreborn:aluminum_ingot', ['croparia:fruit_aluminum'])
      event.shapeless('modern_industrialization:titanium_ingot', ['croparia:fruit_titanium'])
      event.shapeless('modern_industrialization:chromium_ingot', ['croparia:fruit_chromium'])
      event.shapeless('techreborn:sapphire_gem', ['croparia:fruit_sapphire'])
      event.shapeless('techreborn:red_garnet_gem', ['croparia:fruit_red_garnet'])
      event.shapeless('techreborn:yellow_garnet_gem', ['croparia:fruit_yellow_garnet'])
      event.shapeless('techreborn:ruby_gem', ['croparia:fruit_ruby'])
      event.shapeless('modern_industrialization:invar_ingot', ['croparia:fruit_invar'])
      event.shapeless('techreborn:tungstensteel_ingot', ['croparia:fruit_tungstensteel'])
      event.shapeless('techreborn:peridot_gem', ['croparia:fruit_peridot'])
      event.shapeless('ae2:certus_quartz_crystal', ['croparia:fruit_certus'])
      event.shapeless('ae2:fluix_crystal', ['croparia:fruit_fluix'])
      event.shapeless('ae2:silicon', ['croparia:fruit_silicon'])

      event.remove({mod: 'croparia', output: 'croparia:greenhouse'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_white'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_magenta'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_light_blue'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_yellow'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_lime'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_pink'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_gray'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_light_gray'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_cyan'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_purple'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_orange'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_black'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_red'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_green'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_brown'})
      event.remove({mod: 'croparia', output: 'croparia:greenhouse_blue'})
  })
  
