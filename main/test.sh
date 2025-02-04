frameworks=('angular' 'solid' 'react' 'svelte' 'vue')
scenarios=(
  'group1_create_components'
  'group1_create_elements'
  'group1_change_component_type'
  'group3_create_tree'
  'group3_update_leaf'
  'group3_update_root'
  'group5_update_leaf'
  'group5_update_all'
)

for framework in "${frameworks[@]}"; do
  for scenario in "${scenarios[@]}"; do
    pn start -f "$framework" -s "$scenario" -r 10
  done
done